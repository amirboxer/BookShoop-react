const { useState, useEffect } = React


export function FilterBooks({ onSetFilterBy, filtersOriginal }) {

    const [filtersVals, onSetFilterVals] = useState({ ...filtersOriginal })

    useEffect(() => {
        onSetFilterBy(filtersVals)
    }, [filtersVals])

    //{ title: '', maxPrice: null }
    function handleChange(ev) {

        let val = ev.target.value

        if (ev.target.name === 'maxPrice') val = +val

        onSetFilterVals(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
    }


    function onSetFilterBySubmit(ev) {
        ev.preventDefault()
    }

    const { title, maxSpeed } = filtersOriginal

    return (
        <section className="filter-section">
            <form action="" onSubmit={onSetFilterBySubmit}>
                {/* filter by title */}
                <label htmlFor="title">Title</label>
                <input value={title} type="text" name="title" id="title" onChange={handleChange} />

                {/* filter by price */}
                <label htmlFor="price">Maximum price:</label>
                <input value={maxSpeed} type="number" name="maxPrice" id="price" onChange={handleChange} />

                <button>Submit</button>
            </form>

        </section>
    )
}