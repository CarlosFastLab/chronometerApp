import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      btnLabel: 'Start',
      last: null
    }
    //Viarável do timer do relógio
    this.timer = null;

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ btnLabel: 'Start' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 })
      }, 100);
      this.setState({ btnLabel: 'Pause' })
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ btnLabel: 'Start' })
    }
    this.setState({ last: this.state.number })
    this.setState({ number: 0 })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('./src/assets/images/cronometro.png')}
          style={styles.crono} />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <SafeAreaView style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}
            onPress={this.start}
          >
            <Text style={styles.btnText}>{this.state.btnLabel}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}
            onPress={this.clear}
          >
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.containerLast}>
          <Text style={styles.textLast}>
            {this.state.last > 0 ? `Ultimo tempo: ${this.state.last.toFixed(2)}s` : false}
          </Text>
        </SafeAreaView>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  img: {
    width: 50,
    height: 50
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  containerLast: {
    marginTop: 40
  },
  textLast: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
})

export default App;