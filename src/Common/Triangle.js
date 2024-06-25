export default function Triangle({colour}) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill={colour}
                 className="bi bi-triangle-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
            </svg>
        </div>
    )
}


