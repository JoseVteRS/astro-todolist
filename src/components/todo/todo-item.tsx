import FolderIcon from "../icons/folder-icon";

export const TodoCategoryTitle = ({ name }: { name: string }) => {

    return (
        <>
            <div  className="flex items-center" >
                <div className="flex items-center gap-3" >
                    <FolderIcon className="w-5 h-5  fill-gray-400" />

                    <h2 className="font-bold text-xl text-gray-700 ">{name}</h2>
                </div>

                <div className="h-[1px] w-full bg-gray-300 rounded mx-4" ></div>

            </div>
        </>
    );
};

