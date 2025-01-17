import cv_pdf from '../assets/CV/CV_Malaia_December 2024.pdf'

export const cvDownload = () => {
  const pdfUrl = cv_pdf
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = 'CV_Malaia_December 2024.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
