import Textarea from '@mui/joy/Textarea';

export function ResultTextarea() {
    return <section className='result'>
        <div className="result__text">
            <h2>Выбери один или несколько "отстающих" аспектов и опиши, чего тебе в них не хватает.<br />
                Затем опиши конкретные шаги, необходимые для того, чтобы удовлетворить эти аспекты.</h2>
        </div>
        <div className="result__textarea">
            <Textarea color="neutral" minRows={10} variant="solid"
                placeholder='...'
                sx={{
                    '--Textarea-focusedInset': 'var(--any, )',
                    '--Textarea-focusedThickness': '0.25rem',
                    '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
                    '&::before': {
                        transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: '#86b7fe',
                    },
                }} />
        </div>
    </section>
}