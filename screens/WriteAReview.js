import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import PageLayout from '../components/PageLayout/PageLayout';
import PageHeader from '../components/PageHeader/PageHeader';
import bellIcon from '../assets/Mycart/bell.jpg';
import CustomText from '../components/CustomText/CustomText';
import MarginLayout from '../components/MarginLayout/MarginLayout';
import { GlobalStyles } from '../constents/styles';
import Button from '../UI/Button';

export default function WriteAReview({navigation}) {
  const [media, setMedia] = useState(null);
  const [review, setReview] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleAddMedia = async () => {
    // Request permissions to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setMedia({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log('Error launching image library: ', error);
      Alert.alert('Error', 'Could not open image library.');
    }
  };

  const handleReviewChange = (text) => {
    if (text.length <= 250) {
      setReview(text);
      setCharacterCount(text.length);
    }
  };

  const handleSubmit = () => {
    navigation.navigate("Reviews");
  }

  return (
    <PageLayout>
      <PageHeader title="Write A Review" isBellIcon={bellIcon} />
      <MarginLayout>
        <ScrollView>

        
        <CustomText style={styles.addPhotoText}>Add Photo or Video</CustomText>
        <TouchableOpacity onPress={handleAddMedia} style={styles.uploadContainer}>
          {media ? (
            <Image source={media} style={styles.uploadedImage} />
          ) : (
            <View style={styles.uploadContent}>
              <Ionicons name="cloud-upload" size={50} color={GlobalStyles.colors.buttonActiveColor} />
              <Text style={styles.uploadText}>Click here to upload</Text>
            </View>
          )}
        </TouchableOpacity>
        <CustomText style={styles.reviewText}>Write your review</CustomText>
        <TextInput
          style={styles.reviewInput}
          multiline
          numberOfLines={4}
          maxLength={250}
          placeholder="Write anything about this product"
          value={review}
          onChangeText={handleReviewChange}
        />
        <Text style={styles.characterCount}>{250-characterCount} character remaining</Text>
        <View style={styles.submitButtonContainer}>
        <Button style={styles.submitButton} onPress={handleSubmit}>Submit Review</Button>
        </View>
        </ScrollView>
      </MarginLayout>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  addPhotoText: {
    fontSize: 20,
    marginBottom: 10,
  },
  uploadContainer: {
    width: "100%",
    borderWidth: 1, 
    borderColor: GlobalStyles.colors.selectButtonNormal,
    borderStyle: 'dashed',
    height: 185,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  uploadContent: {
    alignItems: 'center',
  },
 
  uploadText: {
    fontSize: 16,
    color: GlobalStyles.colors.selectButtonNormal,
  },
  reviewText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  reviewInput: {
    height: 150,
    width: "100%",
    fontSize: 16,
    color: GlobalStyles.colors.selectButtonNormal,
    borderColor: GlobalStyles.colors.selectButtonNormal  ,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
  characterCount: {
    textAlign: 'right',
    marginTop: 5,
    color: GlobalStyles.colors.selectButtonNormal,
  },
  submitButton:{
    width: 200,
    height: 45,
  },
  submitButtonContainer:{
    alignItems: "center",
    marginTop: 50,
  },
});
