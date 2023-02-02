export default function handler(req: any, res: any) {
    
    console.log('SWIANIAK: ')

    const fs = require('fs');

async function createFileOnDesktop(fileName='bylejaki') {


  const desktopPath = `${process.env.HOME}/Desktop/${fileName}`;
    await fs.mkdirSync(desktopPath, '0777', () => {
      console.log('dir created')
    });

  try {
    await fs.promises.writeFile(desktopPath, 'Hello, World!');
    console.log(`File created at ${desktopPath}`);
  } catch (err) {
    console.error(`An error occurred: ${err}`);
  }
}

createFileOnDesktop('testFile.txt');

    res.status(200).json({ name: 'John Doe' })
}