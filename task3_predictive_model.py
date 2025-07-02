import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score

# Load dataset (real breast cancer dataset)
df = pd.read_csv("https://raw.githubusercontent.com/selva86/datasets/master/BreastCancer.csv")

# Drop columns with missing values
df.dropna(axis=1, inplace=True)

# Separate features and target
X = df.drop(columns=["diagnosis"])
y = df["diagnosis"].apply(lambda x: 1 if x == "M" else 0)  # malignant = 1, benign = 0

# Split dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
acc = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print("Accuracy:", acc)
print("F1 Score:", f1)