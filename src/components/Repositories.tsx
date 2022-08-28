import { useState } from 'react'
import { useAction } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'

export const Repositories: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useAction()
    const { data, error, loading } = useAppSelector(
        (state) => state.repositories
    )

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchRepositories(term)
    }
    return (
        <section>
            <form onSubmit={onSubmit}>
                <input
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error &&
                !loading &&
                data.map((name, idx) => <li key={idx}>{name}</li>)}
        </section>
    )
}
