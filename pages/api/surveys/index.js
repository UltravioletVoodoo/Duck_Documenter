import dbConnect from '../../../utils/dbConnect'
import Survey from '../../../models/Survey'


dbConnect()

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const surveys = await Survey.find({})
                res.status(200).json({ success: true, data: surveys })
            } catch (error) {
                res.status(400).json({ success: false })
            }   
            break
        case 'POST':
            try {
                const survey = await Survey.create(req.body)
                res.status(201).json({ success: true, data: survey})
            } catch {
                res.status(400).json({ success: false })

            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}