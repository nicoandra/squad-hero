import { useState, useEffect } from 'react'

const useDocumentTitle = title => {
    const [documentTitle, setDocumentTitle] = useState(title);
    useEffect(() => {
        document.title = documentTitle ? `${documentTitle} :: SquadHero` : `SquadHero`
    },[documentTitle]);

    return setDocumentTitle
  };
  
  export {useDocumentTitle};