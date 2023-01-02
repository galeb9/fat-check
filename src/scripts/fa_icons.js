import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faBars,
    faXmark,
    faMagnifyingGlass,
    faBarcode
} from "@fortawesome/free-solid-svg-icons";

const icons = [    
    faBars,
    faXmark,
    faMagnifyingGlass,
    faBarcode
]

for(let i = 0; i < icons.length; i++){
    library.add(icons[i])
}




