import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    feed: {
        // marginTop: 52,
        flex: 1, //take up the entire vertical view
        backgroundColor: 'white',
    },
    card: {
        marginVertical: 20,
    },
    description: {
        margin: 16,
    },
    image: {
        width: '100%',
        height: 320,
        flex: 1,
    },
    cardHeader: {
        margin: 4,
        flexDirection: 'row',
    },
    userName: {
        margin: 8,
        fontSize: 18,
        fontWeight: '600',
    }

});

export default styles;