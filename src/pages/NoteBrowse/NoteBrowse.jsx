import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoteList } from 'container/NoteList/NoteList';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const NoteBrowse = () => {
    const [searchText, setSearchText] = useState('');
    
    const noteList = useSelector(store => store.NOTE.noteList);
    
    const filteredList = noteList.filter((note) => {
        const containsTitle = note.title.toUpperCase().includes(searchText.trim().toUpperCase());

        const containsContent = note.content.toUpperCase().includes(searchText.trim().toUpperCase());

        return containsTitle || containsContent;
    })

    return (
        <>
            <div className='row justify-content-center mb-5'>
                <div className='col-sm-12 col-md-4'>
                    <SearchBar placeholder='Search your notes...' onTextChange={setSearchText} />
                </div>
            </div>
            <NoteList noteList={filteredList} />  
        </>
    )
};  