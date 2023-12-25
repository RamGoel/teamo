import { Button } from '@/components/ui/button'
import { UploadIcon } from 'lucide-react'
import React from 'react'

const FilesHeader = () => {
  return (
      <div className='flex items-center justify-between py-5 mt-5 border-b-2'>
          <h1 className='text-2xl font-bold'>My Files</h1>

          <Button>
              <>
                  Upload File
                  <UploadIcon className='ml-2' size={15} />
              </>
          </Button>
    </div>
  )
}

export default FilesHeader