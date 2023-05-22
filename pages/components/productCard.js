import Link from "next/link"
import Image from "next/image"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// import styles from './productCard.scss'


export default function ProductCard({product}){
    const {title, slug, body, thumbnail,text, sitedevelopment} = product.fields
    return(
        <div className='card'>
            {/* <p>{documentToHtmlString(body.value)}</p>
            {documentToHtmlString(body)} */}
            {/* {console.log(documentToReactComponents(body))} */}
        
            <Image src={'https:'+thumbnail.fields.file.url}
width={thumbnail.fields.file.details.image.width}
height={thumbnail.fields.file.details.image.height}/>
<div className="card-title">
<h1>{title}</h1>
</div>
<p>{text}</p>


        </div>
    )
}


