import got from 'got'
import express from 'express'

async function fetchMetOfficeData() {
  const key = "YOUR-KEY-HERE"
  const url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=${key}`

  const json = await got.get(url).json()

  console.log(JSON.stringify(json))
}

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

export default app
