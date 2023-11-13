import React from 'react'
import List from './list/list'

const NavMenu = ({styles}) => {

    const categories="https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const area="https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    const ingredients="https://www.themealdb.com/api/json/v1/1/list.php?i=list";

    return (
        <div className={`${styles.menu} navbar-nav gap-2`}>
            <div className={`${styles.dropdown} nav-item position-relative`}>
                <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </button>
                <ul className="categories dropdown-menu w-100 overflow-auto"><List list={categories} search={"strCategory"} filter="c"/></ul>
            </div>
            <div className={`${styles.dropdown} nav-item position-relative`}>
                <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Area
                </button>
                <ul className="area dropdown-menu w-100 overflow-auto"><List list={area} search={"strArea"} filter="a"/></ul>
            </div>
            <div className={`${styles.dropdown} nav-item position-relative`}>
                <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ingredients
                </button>
                <ul className="ingredients dropdown-menu w-100 overflow-auto"><List list={ingredients} search={"strIngredient"} filter="i"/></ul>
            </div>
        </div>
    )
}

export default NavMenu