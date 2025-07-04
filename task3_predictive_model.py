import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score

# Load dataset from public GitHub mirror
df = pd.read_csv("data.csv")

# Drop unnecessary columns
df.drop(columns=["id", "Unnamed: 32"], inplace=True, errors="ignore")

# Convert diagnosis: M = 1 (Malignant), B = 0 (Benign)
df["diagnosis"] = df["diagnosis"].map({"M": 1, "B": 0})

# Features and target
X = df.drop(columns=["diagnosis"])
y = df["diagnosis"]

# Stratified split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Print label distribution
print("Training labels:\n", y_train.value_counts())
print("Test labels:\n", y_test.value_counts())

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict and evaluate
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print(" Accuracy:", acc)
print(" F1 Score:", f1)

# Test performance
def test_scores():
    assert acc > 0.90, f" Accuracy too low: {acc}"
    assert f1 > 0.90, f" F1 Score too low: {f1}"
    print(" Model passed performance tests!")

test_scores()
