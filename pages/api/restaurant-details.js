import merchant from '../../public/json/merchant.json'

export default function handler(req, res) {
  res.status(200).json(merchant)
}
