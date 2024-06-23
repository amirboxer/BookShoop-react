const { useState, useEffect } = React


export function FilterBooks({ onSetFilterBy, filtersVals: filtersOriginal }) {

    const [filtersVals, onSetFilterVals] = useState({ ...filtersOriginal })

    useEffect(() => {
        onSetFilterBy(filtersVals)
    }, [filtersVals])

    //{ title: '', maxPrice: null }
    function handleChange(ev) {
        ev.preventDefault()

        let val = ev.target.value

        if (ev.target.name === 'maxPrice') val = +val

        onSetFilterVals(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
    }

    return (
        <section className="filter-section">
            <form action="" onSubmit={onSetFilterBy}>
                {/* filter by title */}
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={handleChange} />

                {/* filter by price */}
                <label htmlFor="price">Maximum price:</label>
                <input type="number" name="maxPrice" id="price" onChange={handleChange} />

                <button>Submit</button>
            </form>

        </section>
    )
}