import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return(
        <FiltersContainer>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All'/>
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active'/>
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed'/>
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="btn clearBtn" id="clearButton">
                Clear Complete
            </button>
        </FiltersContainer>
    )
}

export default TodoFilters;