import neatCsv from  'neat-csv'

import fs from 'fs'

fs.readFile('./data.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(await neatCsv(data))
})