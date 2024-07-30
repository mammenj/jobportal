'use client';

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";


const fileInRef = useRef<HTMLInputElement>(null);
const [isUploading, setIsUploading] = useState(false);
const [isImageLoading, setIsImageLoading] = useState(false);



const imgLoading = (isUploading || isImageLoading);
export default function ImageUpload() {
    return (

        <>

            <div className="bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center">


            </div>
            <input type="hidden" />
            <div className="mt-2">
                <input

                    type="file"
                    className="hidden" />

            </div>
        </>
    )

}

