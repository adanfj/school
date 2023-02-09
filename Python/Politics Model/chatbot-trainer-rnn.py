#%%
import tensorflow as tf
import numpy as np
# Create an array of conversational examples
data = np.array([
    ["What is proportional representation?", "Proportional representation is defined as a representation system that allows the votes to a group, generally a party, to go to people who were not in a list. However it's incorrectly called representation because the wrongly called representatives are chosen by people from the party."],
    ["Sure, what's your order number?", "My order number is 123456."],
    ["Thanks, I found your order. What's the issue?", "I received the wrong item."],
    ["I apologize, we will send you the correct item. Is there anything else?", "No, that's all. Thank you."]
])

# Create a tokenizer to convert words to integers
tokenizer = tf.keras.preprocessing.text.Tokenizer()

# Fit the tokenizer on the dataset
tokenizer.fit_on_texts([x +" "+ y for x, y in data])
#%%
# Create a function to preprocess the data
X = tokenizer.texts_to_sequences(data[:,0])
Y = tokenizer.texts_to_sequences(data[:,1])
X= tf.keras.preprocessing.sequence.pad_sequences(X)
Y = [tf.keras.utils.to_categorical(y, num_classes=len(tokenizer.word_index)+1) for y in Y]
Y= tf.keras.preprocessing.sequence.pad_sequences(Y)


#%% Build a simple model using an Embedding layer and LSTM layer
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(input_dim=len(tokenizer.word_index)+1, output_dim=64, input_length=1),
    tf.keras.layers.LSTM(64, return_sequences=True),
    tf.keras.layers.TimeDistributed(tf.keras.layers.Dense(len(tokenizer.word_index)+1, activation='softmax'))
])
# Compile and train the model
model.compile(optimizer='adam', loss='categorical_crossentropy')
model.fit(X, Y, epochs=10)

# %%
# Use the trained model to generate new words
def generate_response(input_text):
    input_seq = tokenizer.texts_to_sequences([input_text])
    response = model.predict(input_seq)
    response = response.argmax(axis=-1)
    response = tokenizer.sequences_to_texts([response])
    return response

print(generate_response("Hi, I need some help with my order."))
