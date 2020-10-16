# Facinate Testing Data
echo "Testing Data Conversions"
# rudd
python3 facinator.py './images/Testing Data/rudd' jpg './ruddorwrongfaces/Testing Data/rudd/'
python3 facinator.py './images/Testing Data/rudd' jpeg './ruddorwrongfaces/Testing Data/rudd/'
python3 facinator.py './images/Testing Data/rudd' png './ruddorwrongfaces/Testing Data/rudd/'
# wrong
python3 facinator.py './images/Testing Data/wrong' jpg './ruddorwrongfaces/Testing Data/wrong/'
python3 facinator.py './images/Testing Data/wrong' jpeg './ruddorwrongfaces/Testing Data/wrong/'
python3 facinator.py './images/Testing Data/wrong' png './ruddorwrongfaces/Testing Data/wrong/'

# Facinate Training Data
echo "Training Data Conversions"
# rudd
python3 facinator.py './images/Training Data/rudd' jpg './ruddorwrongfaces/Training Data/rudd/'
python3 facinator.py './images/Training Data/rudd' jpeg './ruddorwrongfaces/Training Data/rudd/'
python3 facinator.py './images/Training Data/rudd' png './ruddorwrongfaces/Training Data/rudd/'
# wrong
python3 facinator.py './images/Training Data/wrong' jpg './ruddorwrongfaces/Training Data/wrong/'
python3 facinator.py './images/Training Data/wrong' jpeg './ruddorwrongfaces/Training Data/wrong/'
python3 facinator.py './images/Training Data/wrong' png './ruddorwrongfaces/Training Data/wrong/'