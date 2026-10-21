import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState<any | null>(null);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const openDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if ((result as any).type === 'success') setFile(result);
  };

  const submit = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Name and email are required');
      return;
    }
    console.log({ name, email, phone, date, file });
    Alert.alert('Success', 'Form submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Form</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <View style={styles.row}>
        <Button title="Pick Date" onPress={() => setShowPicker(true)} />
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </View>
      {showPicker && (
        <DateTimePicker value={date} mode="date" display="default" onChange={onChangeDate} />
      )}
      <Button title={file ? file.name : 'Select File'} onPress={openDocument} />
      <View style={styles.submitBtn}>
        <Button title="Submit" onPress={submit} color="#1E90FF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12, color: '#1E90FF' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 10, marginBottom: 10, backgroundColor: '#fff' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  dateText: { marginLeft: 10, color: '#333' },
  submitBtn: { marginTop: 20, borderRadius: 4, overflow: 'hidden' },
});
