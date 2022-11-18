// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ name: 'Method Not Allowed' });
  }

  try {
    const { text } = req.body;

    const note = await prisma.note.create({
      data: {
        text,
      },
    });

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ name: 'Internal Server Error' });
  }
}
