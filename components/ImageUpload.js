import {useState} from 'react'
import {API_URL} from '../config/index'
import styles from '../styles/Form.module.css'

export default function ImageUpload({evtI, imageUploaded}) {

    const [image, setImage] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleFileChange = async(e)=>{
        //console.log(e.target.files[0])
        const formData = new FormData()
        formData.append('files', image)
        formData.append('ref', events)
        formData.append('refId', evtId)
        formData.append('field', image)

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        })

        if(res.ok){
            imageUploaded()
        }
    }

    
    return (
        <di className= {styles.form}>
           <h1>Upload Event Image</h1>
           <form onSubmit={handleSubmit}>
               <div className={styles.file}>
                   <input type="file" onChange= {handleFileChange}/>

               </div>
               <input type="submit" value="upload" className="btn"/>

           </form>
        </di>
    )
}
