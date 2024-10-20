import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import StyledText, { StyledGradientButton } from '../../../utils/globalstyle';
import { LoadingScreen } from '../LoadingScreen';
import { styles } from "./styles/RatingModal.styles";
import { getIconById } from '../../../utils/util';

const RatingModal = ({ visible, onClose, onSubmit, isLoading }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const renderStars = () => {
        return (
            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <FontAwesome
                            name={star <= rating ? 'star' : 'star-o'}
                            size={32}
                            style={{ marginRight: 5 }}
                            color={star <= rating ? '#FFD700' : '#ccc'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const handleSubmit = () => {
        onSubmit(rating, comment);
        setRating(0);
        setComment('');

    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalContainer}>

                <View style={styles.modalContent}>
                    {!isLoading &&
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <StyledText font20pt boldGray>Rate Service</StyledText>
                            {renderStars()}
                            <TextInput
                                style={styles.textInput}
                                placeholder="Leave a comment"
                                value={comment}
                                onChangeText={setComment}
                                multiline
                            />

                            <StyledGradientButton text={"send"} disabled={rating == 0} action={() => handleSubmit()} />

                            <TouchableOpacity style={styles.closeButton}
                                onPress={() => {
                                    setRating(0);
                                    onClose();
                                }}>
                                {getIconById("iconClose")}
                            </TouchableOpacity>
                        </View>
                    }
                    {isLoading &&
                        <LoadingScreen />
                    }
                </View>



            </View>
        </Modal>
    );
};

export default RatingModal;
