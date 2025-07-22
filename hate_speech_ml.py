# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
import re
import nltk
import string

# Download stopwords
nltk.download('stopwords')
stemmer = nltk.SnowballStemmer("english")
from nltk.corpus import stopwords
stopword = set(stopwords.words('english'))

# Load the dataset
data = pd.read_csv("twitter_data.csv")

# Map class labels
data["labels"] = data["class"].map({
    0: "Hate Speech",
    1: "Offensive Language",
    2: "No Hate and Not Offensive"
})

# Select relevant columns
data = data[["tweet", "labels"]]

# Define the clean function
def clean(text):
    text = str(text).lower()
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'https?://\S+|www\.\S+', '', text)
    text = re.sub(r'<.*?>+', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\n', '', text)
    text = re.sub(r'\w*\d\w*', '', text)
    text = [word for word in text.split(' ') if word not in stopword]
    text = " ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text = " ".join(text)
    return text

# Apply the clean function
data["tweet"] = data["tweet"].apply(clean)

# Prepare data for training
x = np.array(data["tweet"])
y = np.array(data["labels"])

cv = CountVectorizer()
X = cv.fit_transform(x)  # Fit the Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

# Train the classifier
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Test with a sample
sample = "Just realized that this coffee is basically a hug in a mug. ☕💛 #MorningVibes #CoffeeLover #CozyFeels"
data = cv.transform([sample]).toarray()
print(clf.predict(data))