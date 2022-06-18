const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/user')

router.post(
  '/register',
  [
    check('name', 'Name is required').isLength({ min: 3 }),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }
    const { name, email, password, role } = req.body
    try {
      const usermail = await User.findOne({ email })
      if (usermail) {
        return res.status(400).json({ error: 'User already exists' })
      }
      const user = new User({ name, email, password, role })
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()
      const payload = {
        user: {
          id: user.id,
        },
      }
      jwt.sign(
        payload,
        process.env.JWT_SECRETKEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err
          res.status(200).json({ token })
        }
      )
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, error: error.message })
    }
  }
)

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ error: 'User does not exist' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid Password' })
      }
      const payload = {
        user: {
          id: user.id,
          email: user.email,
        },
      }
      jwt.sign(
        payload,
        process.env.JWT_SECRETKEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err
          res.status(200).json({ token, payload })
        }
      )
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, error: error.message })
    }
  }
)

module.exports = router
