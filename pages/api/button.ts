import { NextApiRequest, NextApiResponse } from 'next'
import Count from '../../db/incrementCount'
import Button from '../../src/Button'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const count = await Count.get()
  const button = new Button(count)

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(button.render())
}
