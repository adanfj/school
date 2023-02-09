#%%
import tensorflow as tf
from tensorflow import keras
from keras.preprocessing.text import Tokenizer
from keras.models import Sequential
from keras.layers import Embedding,LSTM,Dense,Flatten
from keras.utils import pad_sequences,to_categorical

from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import re
import string
#%%
# vocab_size=100
embedding_dim=64
max_length=100
seq_length=32
batch_length=64
#%%
def preprocess(text):
    t = text.lower()
    t = re.sub(r'\d+','',t)
    t = re.sub(r'[^\w]', ' ', t)
    t = re.sub(r'[\s]+', ' ', t)
    t = re.sub(r' +', ' ', t)
    return t
def build_vocab(preprocessed_text):
    words = preprocessed_text.split()
    return {word: i for i,word in enumerate(set(words))}
def encode_text(preprocessed_text,vocab):
    return [vocab[word] for word in preprocessed_text.split()]
def generate_sequences(encoded_text,seq_length):
    for i in range(0,len(encoded_text)-seq_length,seq_length):
        yield encoded_text[i:i+seq_length]

#%% Text
with open("constitution.txt") as f:
    text=f.read()
lines = text.split('\n')

qa = pd.read_csv("q&a.csv",delimiter=';').to_numpy()

tokenizer = Tokenizer()
tokenizer.fit_on_texts(lines)
vocab_size = len(tokenizer.word_index) + 1

sequences = tokenizer.texts_to_sequences(lines)
sequences = pad_sequences(sequences)
X=sequences[:,:-1]
y=sequences[:,-1]
y = to_categorical(y, num_classes=vocab_size)
seq_length = X.shape[1]
dataset = tf.data.Dataset.from_tensor_slices()
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33,shuffle=True)
#%%
model = Sequential([
    Embedding(vocab_size,embedding_dim,input_length=seq_length),
    # Flatten(),
    LSTM(128,dropout=0.1,recurrent_dropout=0.1,return_sequences=True),
    # LSTM(128,dropout=0.1,recurrent_dropout=0.1,return_sequences=True),
    LSTM(128,dropout=0.1,recurrent_dropout=0.1),
    Dense(100,activation="relu"),
    Dense(vocab_size,activation="softmax")
])
model.compile("adam","categorical_crossentropy",["accuracy"])
model.fit(X_train,y_train,epochs=50,validation_data=(X_test,y_test))
#%% Q&A

