import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image source={{ uri: coin.image }} style={styles.image} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>${coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h < 0 ? styles.red : styles.green,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: 'row',
  },
  text: {
    color: '#ffff',
    textAlign: 'right',
  },
  image: {
    height: 30,
    width: 30,
  },
  textSymbol: {
    color: '#434343',
    textTransform: 'uppercase',
  },
  pricePercentage: {
    color: '#ffff',
    textAlign: 'right',
  },
  red: {
    color: '#FF0004',
  },
  green: {
    color: '#39FF00',
  },
})

export default CoinItem
