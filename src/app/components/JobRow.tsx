'use client';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function JobRow({jobDoc}:{jobDoc:string}) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center w-12 basis-12 shrink-0">
            <img
              className="size-12"
              src="" alt=""/>
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div>
                <Link href={`/jobs/12`} className="hover:underline text-gray-500 text-sm"></Link>
              </div>
              <div className="font-bold text-lg mb-1">
                <Link className="hover:underline" href={'/show/'+12}>Title</Link>
              </div>
              <div className="text-gray-400 text-sm capitalize">
                Remote
                {' '}&middot;{' '}
                London, UK
                {' '}&middot;{' '}
            full-time
                {true && (
                  <>
                    {' '}&middot;{' '}
                    <Link href={'/jobs/edit/'+22}>Edit</Link>
                    {' '}&middot;{' '}
                    <button
                      type="button"
                      onClick={async () => {
                        ('/api/jobs?id='+22);
                        window.location.reload();
                      }}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
             
              <div className="content-end text-gray-500 text-sm">
                2 weeks
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}