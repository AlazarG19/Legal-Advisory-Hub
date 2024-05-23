import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = ({ sections }) => {
    console.log("sections inside documents", sections[0]["question"])
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {sections.map((items) => (

                        <Text>{items["statement"]}</Text>
                    ))}
                </View>
            </Page>
        </Document>

    )
};

export default MyDocument