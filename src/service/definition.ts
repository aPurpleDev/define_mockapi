import 'isomorphic-fetch';

export const fetchDefinitions = async (word) => {
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'app_id': process.env.API_ID,
            'app_key': process.env.API_KEY,
            'mode': 'no-cors'
        }
    };
    const url = `${process.env.API_BASE_URL}/entries/${process.env.LANGUAGE}/${word.toLowerCase()}`

    try {
        const definition = await fetch(url, options)
        const jsonDefinition = await definition.json()


        //'dirty' access to data but simpler for the scope of this exercise
        // @ts-ignore
        if (jsonDefinition.error) {
            return false;
        }
        // @ts-ignore
        return jsonDefinition?.results[0]?.lexicalEntries[0]?.entries[0]?.senses[0]?.definitions;
    } catch (e) {
        console.error(e.message)
        throw new Error('Error : invalid word')
    }
}