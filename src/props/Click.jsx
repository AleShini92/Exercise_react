/**
 * 
 * @param {*} children  => takes Play & Upload to @function Toolbar
 * @param {*} message   => takes @property onPlay & onUpload to @function Play
 * @param {*} theme     => takes @class style to @function Button 
 * @function button
 * @returns tag button onClick
 */

function Button({ children: text, message, theme, movie, file }) {
    return(
        <button onClick={message} style={theme}>
            {text} {movie} {file}
        </button>
    )
}

/**
 * 
 * @param {*} onPlay
 * @param {*} onUpload 
 * @children Play - Upload
 * @returns component Button with @property click - theme
 */

function Toolbar({ onPlay, onUpload }) {
    return(
        <>
            <Button 
                message={onPlay} 
                theme={{marginRight: 20}}
                movie="Movie"
            >
                Click to
            </Button>

            <Button
                message={onUpload}
                file="Upload"
            >
                Click to
            </Button>
        </>
    )
}

/**
 * 
 * @property onPlay - onUpload 
 * @function Play
 * @returns Toolbar
 */

export default function Play() {
    return (
        <Toolbar
            onPlay={() => alert("Video in Play!!")}
            onUpload={() => alert("Upload file!!")}
        />
    )
}