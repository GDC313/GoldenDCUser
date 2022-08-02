import React, { Component } from "react";
import {
  Alert,
  FlatList,
  Image, ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Divider } from "react-native-elements";
import colors from "../styles/colors";
import fontStyle from "../styles/fontStyle";
import Constants from "../styles/Constants";
import database from "@react-native-firebase/database";

let data = [
  {
    team1: {
      name: "IND",
      score: 117,
      innings: {
        team1: [
          {
            playerName: "Madhevere",
            out: "c Neil Rock b Craig Young",
            run: "1",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "T Marumani",
            out: "c Stirling b Craig Young",
            run: "1",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Chakabva (wk)",
            out: "b Simi Singh",
            run: "47",
            ball: "28",
            four: "4",
            six: "1",
          },
          {
            playerName: "Dion Myers",
            out: "b Getkate",
            run: "10",
            ball: "14",
            four: "1",
            six: "0",
          },
          {
            playerName: "Craig Ervine (c)",
            out: "c Andy Balbirnie b Simi Singh",
            run: "17",
            ball: "12",
            four: "1",
            six: "1",
          },
          {
            playerName: "Milton Shumba",
            out: "c Neil Rock b Barry McCarthy",
            run: "7",
            ball: "18",
            four: "0",
            six: "0",
          },
          {
            playerName: "Ryan Burl",
            out: "run out (Andy Balbirnie)",
            run: "12",
            ball: "15",
            four: "0",
            six: "0",
          },
          {
            playerName: "W Masakadza",
            out: "not out",
            run: "19",
            ball: "15",
            four: "1",
            six: "0",
          },
          {
            playerName: "Luke Jongwe",
            out: "not out",
            run: "2",
            ball: "4",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Craig Young",
            over: "4",
            run: "15",
            wickets: "2",
          },
          {
            playerName: "Barry McCarthy",
            over: "4",
            run: "20",
            wickets: "1",
          },
          {
            playerName: "Curtis Campher",
            over: "2",
            run: "25",
            wickets: "1",
          },
          {
            playerName: "Simi Singh",
            over: "4",
            run: "22",
            wickets: "2",
          },
          {
            playerName: "Getkate",
            over: "2",
            run: "16",
            wickets: "1",
          },
          {
            playerName: "Benjamin White",
            over: "4",
            run: "18",
            wickets: "0",
          },
        ],
        extras: "1",
        total: "117",
        didNotBat: "Chatara, Ngarava,",
      },
      overs: "20",
    },
    team2: {
      name: "ENG",
      score: 114,
      innings: {
        team2: [
          {
            playerName: "Paul Stirling",
            out: "b Luke Jongwe",
            run: "24",
            ball: "19",
            four: "5",
            six: "0",
          },
          {
            playerName: "Kevin O Brien",
            out: "b Ryan Burl",
            run: "25",
            ball: "32",
            four: "3",
            six: "0",
          },
          {
            playerName: "Andrew Balbirnie (c)",
            out: "lbw b Ryan Burl",
            run: "6",
            ball: "8",
            four: "0",
            six: "0",
          },
          {
            playerName: "George Dockrell",
            out: "c W Masakadza b Ryan Burl",
            run: "8",
            ball: "6",
            four: "1",
            six: "0",
          },
          {
            playerName: "Shane Getkate",
            out: "c Chatara b W Masakadza",
            run: "5",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Curtis Campher",
            out: "c Dion Myers b W Masakadza",
            run: "3",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "Neil Rock (wk)",
            out: "b Luke Jongwe",
            run: "4",
            ball: "7",
            four: "0",
            six: "0",
          },
          {
            playerName: "Simi Singh",
            out: "not out",
            run: "28",
            ball: "22",
            four: "3",
            six: "1",
          },
          {
            playerName: "Barry McCarthy",
            out: "b Ngarava",
            run: "4",
            ball: "11",
            four: "0",
            six: "0",
          },
          {
            playerName: "Craig Young",
            out: "run out (Chakabva/Ngarava)",
            run: "0",
            ball: "1",
            four: "0",
            six: "0",
          },
          {
            playerName: "Benjamin White",
            out: "not out",
            run: "0",
            ball: "0",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Wellington Masakadza",
            over: "4",
            run: "18",
            wickets: "2",
          }, {
            playerName: "Richard Ngarava",
            over: "4",
            run: "17",
            wickets: "1",
          }, {
            playerName: "Tendai Chatara",
            over: "3",
            run: "25",
            wickets: "0",
          }, {
            playerName: "Luke Jongwe",
            over: "4",
            run: "17",
            wickets: "2",
          }, {
            playerName: "Ryan Burl",
            over: "4",
            run: "22",
            wickets: "3",
          }, {
            playerName: "Dion Myers",
            over: "1",
            run: "12",
            wickets: "0",
          },
        ],
        extras: "7",
        total: "114",
        didNotBat: "",
      },
      overs: "20",
    },
    result: {
      date: "Fri,27 Aug 2021",
      winTeam: "IND win by 3 runs",
    },
  },
];

class LiveMatchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: this.props.route.params.matchId,
      item: this.props.route.params.item,
    };
    this._setNavigationOptions();
  }

  /**
   * set navigation options
   */
  _setNavigationOptions = () => {
    this.props.navigation.setOptions({
      headerTitle: props => <Text
        {...props}
        style={{
          alignSelf: "center",
          fontFamily: fontStyle.AvenirBlack,
          fontSize: 16,
          color: colors.WHITE,
        }}>{"IND VS AUS"}</Text>,
      headerTitleStyle: {
        alignSelf: "center",
      },
      headerStyle: {
        backgroundColor: colors.BLUE_COLOR,
      },
      headerBackButtonText: "",
      headerBackTitleVisible: false,
      headerTintColor: colors.WHITE,
      headerRight: () => (
        <View />
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Image
            resizeMode={"cover"} style={{
            width: 13, height: 22,
            marginStart: 15,
            tintColor: colors.WHITE,
          }} source={require("../assets/images/ic_back_1.png")} />
        </TouchableOpacity>
      ),
      headerLayoutPreset: "center",
    });
  };

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: colors.PRIMARY_COLOR,
      }}>
        <SafeAreaView />
        <StatusBar translucent backgroundColor="tansparent" />
        <View style={{
          height: 50,
          marginTop: 22,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.PRIMARY_COLOR,
          flexDirection: "row",
        }}>
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 0,
            }}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Image
              resizeMode={"cover"}
              style={{
                width: 20, height: 18,
                alignSelf: "center",
                marginStart: 15,
              }} source={require("../assets/images/ic_back.png")} />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: fontStyle.MontserratBold,
              fontSize: 20,
              color: colors.WHITE,
            }}>{Constants.APP_TITLE}</Text>
        </View>
        <View style={{
          paddingTop:20,
          paddingBottom:20,
          backgroundColor:colors.WHITE
        }}>
          <View style={{
            flexDirection: "column",
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            marginStart: 10,
            marginEnd: 10,
            borderRadius: 8,
            borderWidth: 1.5,
            borderColor: "rgba(2,79,39,0.1)",
          }}>

            <View style={{
              flexDirection: "row",
            }}>
              {
                this.state.item.teamFirstImage !== null ?
                  this.state.item.teamFirstImage !== "" ?
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={{uri: "https://www.goldendc.demourl.ca/public/uploaded/images/" + this.state.item.teamFirstImage}}/>
                    :
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={require('../assets/images/ic_top_logo.png')}/>
                  :
                  <ImageBackground
                    resizeMode={'cover'}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }} source={require('../assets/images/ic_rond_gradiant.png')}>
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 20,
                        height: 20,
                      }} source={require('../assets/images/ic_top_logo.png')}/>
                  </ImageBackground>
              }

              <View style={{
                flexDirection: "column",
              }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratMedium,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  this.state.item.teamFirstName
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratBold,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  this.state.item.teamFirstInning.score + "/" + this.state.item.teamFirstInning.wickets
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratRegular,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  this.state.item.teamFirstInning.overs + " Ov"
                }</Text>
              </View>

              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}>
                <View style={{
                  flexDirection: "column",
                  width: 40,
                  borderRadius: 50,
                  height: 40,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.YELLOW_COLOR,
                }}>
                  <Text
                    style={{
                      alignSelf: "center",
                      textAlign: "center",
                      fontFamily: fontStyle.MontserratBold,
                      fontSize: 15,
                      color: colors.STATUS_BAR_COLOR,
                    }}>{
                    "VS"
                  }</Text>
                </View>
              </View>
              {
                this.state.item.teamSecondImage !== null ?
                  this.state.item.teamSecondImage !== "" ?
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={{uri: "https://www.goldendc.demourl.ca/public/uploaded/images/" + this.state.item.teamSecondImage}}/>
                    :
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={require('../assets/images/ic_top_logo.png')}/>
                  :
                  <ImageBackground
                    resizeMode={'cover'}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }} source={require('../assets/images/ic_rond_gradiant.png')}>
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: 20,
                        height: 20,
                      }} source={require('../assets/images/ic_top_logo.png')}/>
                  </ImageBackground>
              }

              <View style={{
                flexDirection: "column",
              }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratMedium,
                    fontSize: 10,
                    color: colors.BLUE_COLOR,
                  }}>{
                  this.state.item.teamSecondName
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratBold,
                    fontSize: 10,
                    color: colors.BLACK_0B,
                  }}>{
                  this.state.item.teamSecondInning.score + "/" + this.state.item.teamSecondInning.wickets
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratRegular,
                    fontSize: 10,
                    color: colors.BLACK_0B,
                  }}>{
                  this.state.item.teamSecondInning.overs + " Ov"
                }</Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            backgroundColor:colors.STATUS_BAR_COLOR,
            paddingStart: 10,
            paddingTop: 12,
            paddingBottom: 12,
            fontFamily: fontStyle.MontserratBold,
            fontSize: 15,
            color: colors.WHITE}}>{
          this.state.item.teamFirstName+" Inning"
        }</Text>
        {/* First inning batting */}
        <View style={{
          backgroundColor:colors.LINE_GRAY_COLOR,
          flexDirection: 'row',
        }}>
          <Text
            style={{
              flex:6,
              marginLeft: 10,
              fontFamily: fontStyle.MontserratBold,
              fontSize: 15,
              color: colors.STATUS_BAR_COLOR}}>{
            Constants.BATSMAN
          }</Text>
          <Text
            style={{
              flex:1,
              marginLeft: 10,
              fontFamily: fontStyle.MontserratMedium,
              fontSize: 12,
              alignSelf:'center',
              color: colors.STATUS_BAR_COLOR}}>{
            "R"
          }</Text>
          <Text
            style={{
              flex:1,
              marginLeft: 10,
              fontFamily: fontStyle.MontserratMedium,
              fontSize: 12,
              alignSelf:'center',
              color: colors.STATUS_BAR_COLOR}}>{
            "B"
          }</Text>
          <Text
            style={{
              flex:1,
              marginLeft: 10,
              fontFamily: fontStyle.MontserratMedium,
              fontSize: 12,
              alignSelf:'center',
              color: colors.STATUS_BAR_COLOR}}>{
            "4s"
          }</Text>
          <Text
            style={{
              flex:1,
              marginLeft: 10,
              fontFamily: fontStyle.MontserratMedium,
              fontSize: 12,
              alignSelf:'center',
              color: colors.STATUS_BAR_COLOR}}>{
            "6s"
          }</Text>
        </View>

      </View>
    );
  }
}

export default LiveMatchScreen;
