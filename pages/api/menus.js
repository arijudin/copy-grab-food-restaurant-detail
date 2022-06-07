import menus from '../../public/json/menu.json'

export default function handler(req, res) {
  res.status(200).json(menus)
}
