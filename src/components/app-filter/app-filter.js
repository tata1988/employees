import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen1000', label: 'з/п больше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name; // if (props.filter === name) {active = true/false}
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}

            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}

        </div>
    );
}

export default AppFilter;