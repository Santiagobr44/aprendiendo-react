import { useState, useEffect } from 'react'
import { getImageFactURL } from '../services/imageUrl'

export function useCatImage ({ fact }) {
  const [imgageURL, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    getImageFactURL({ fact }).then(newImageURL => setImageUrl(newImageURL))
  }, [fact])

  return { imgageURL }
}
