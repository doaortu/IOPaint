import { useStore } from "@/lib/states"

const FileIndex = () => {
  const [fileManagerState] = useStore((state) => [
    state.fileManagerState
  ])

  if (fileManagerState.totalImage == -1 || fileManagerState.currentIndex == -1) {
    return null
  }

  return (
    <div className="border rounded-lg px-2 py-[6px] z-10 bg-background">
      Index: {fileManagerState.currentIndex} / {fileManagerState.totalImage}
    </div>
  )
}

export default FileIndex
