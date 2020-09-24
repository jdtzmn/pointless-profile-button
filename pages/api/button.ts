import { NextApiRequest, NextApiResponse } from 'next'
import Count from '../../db/incrementCount'
import Button from '../../src/Button'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const count = await Count.get()
  const button = new Button(count)

  res.setHeader('Content-Type', 'image/svg+xml')
  res.setHeader(
    'Cache-Control',
    'Cache-Control: s-maxage=1, stale-while-revalidate'
  )
  res.status(200).send(button.render())
}
