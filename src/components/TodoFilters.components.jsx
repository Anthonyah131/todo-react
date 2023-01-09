const FiltersContainer = ({ children }) => {
    return(
        <div className="FilterContainer">
            {children}
        </div>
    )
}

const ItemsLeft = ({ total }) => {
    return(
        <p>
            {total} Items left
        </p>
    )
}

const FilterButtonContainer = ({ children }) => {
    return(
        <div className="filterButtonContainer">
            {children}
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    return(
       <button onClick={action} className="btn btnFilter" style={{color: active.toLowerCase().includes(filter.toLowerCase()) ? '#6b7190' : '#26272c'}} >{filter}</button>
    )
}

export {FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton};