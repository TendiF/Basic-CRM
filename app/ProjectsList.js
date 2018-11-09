import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Modal,
    TouchableHighlight,
    Alert,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
    Button,
    DatePickerAndroid,
    RefreshControl
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { widthScale, heightScale } from './utils/Scale';

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        flex: 5
    }
});

const Input = (props) => {
    return (
        <View style={{
            width: widthScale(0.8),
            height: heightScale(0.08),
            flexDirection: 'row',
            marginTop: props.marginTop
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: 15,
                borderWidth: 1,
                borderColor: '#bdc3c7',
                borderTopWidth: !props.marginTop ? 0 : 1
            }}>
                <Text style={{ fontWeight: 'bold' }}>{props.label}</Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#bdc3c7',
                borderLeftWidth: 0,
                borderTopWidth: !props.marginTop ? 0 : 1
            }}>
                <TextInput
                    style={{ paddingLeft: 15 }}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={(input) => {
                        props.onChange(input);
                    }}
                    onFocus={props.onFocus}
                    editable={props.editable}
                />
            </View>
        </View>
    );
}

const ButtonIcon = (props) => {
    return(
        <TouchableNativeFeedback>
        <View style={{ height:props.height, width: props.width, backgroundColor : props.color}}>
            <View style={{flex : 1, flexDirection : "row-reverse", alignItems:'center'}}>
                <Icon style={{flex : 1}} name={props.iconName} size={props.sizeIcon} color="#ffffff" />
                <Text style={{flex : 3, color:"#ffffff", paddingLeft: 15}} >{props.title}</Text>
            </View>
        </View> 
        </TouchableNativeFeedback>
    )
}

class NewProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            start_date: null,
            end_date: null
        }
    }

    async openDatePicker(inputValue) {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });

            if (action == DatePickerAndroid.dateSetAction) {
                if (inputValue == 'start_date') {
                    this.setState({ start_date: year + ' ' + month + ' ' + day })
                } else if (inputValue == 'end_date') {
                    this.setState({ end_date: year + ' ' + month + ' ' + day })
                }
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>Create Project</Text>
                </View>
                <View style={{
                    flex: 12,
                    alignItems: 'center',
                    paddingTop: 10,

                }}>
                    <ScrollView>
                        <Input
                            marginTop={15}
                            label='Title'
                            placeholder='Project Name'
                            value={this.state.title}
                            onChange={(input) => {
                                this.setState({ title: input });
                            }}
                        />
                        <TouchableNativeFeedback
                            onPress={() => {
                                this.openDatePicker('start_date');

                            }}
                        >
                            <Input
                                marginTop={15}
                                label='Start Date'
                                placeholder='Start Date'
                                value={this.state.start_date}
                                onFocus={() => {
                                }}
                                editable={false}
                            />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => {
                                this.openDatePicker('end_date');
                            }}
                        >
                            <Input
                                marginTop={0}
                                label='End Date'
                                placeholder='End Date'
                                value={this.state.end_date}
                                editable={false}
                            />
                        </TouchableNativeFeedback>
                        <View style={{ flex: 1, marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold' }} >Description </Text>
                            <TextInput
                                style={{
                                    width: widthScale(0.8),
                                    height: heightScale(0.20),
                                    borderWidth: 1,
                                    borderColor: '#bdc3c7',
                                    textAlignVertical: 'top'
                                }}
                                multiline={true}
                                numberOfLines={4}
                            >
                            </TextInput>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Button
                                title="Submit" />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default class FormFilterSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter : {
                start_date : null,
                end_date : null,
                task : null ,
                status : null
            }
        }
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignContent: 'stretch'
                }}
            >
                <Text>Modal Filter</Text>

                <View
                    style={{ flex:1, flexDirection:'row', justifyContent:'center' }}
                >
                    <ButtonIcon color="#3498db" title="START DATE" iconName="sort-down" width={widthScale(0.34)} height={heightScale(0.065)} sizeIcon={20}/>
                    <ButtonIcon color="#3498db" title="START DATE" iconName="sort-down" width={widthScale(0.34)} height={heightScale(0.065)} sizeIcon={20}/>
                </View>
                <Text>End Date</Text>
                <Text>Time Left</Text>
                <Text>Task</Text>
                <Text>Project Status</Text>
            </View>
        );
    }
}

 class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalFilterSort: false,
            modalAdd: false,
            refresh: false
        }
    }
    render() {
        const toggleModal = (type) => {
            if (type == 'filterSort') {
                this.setState((prev) => {
                    return { modalFilterSort: !prev.modalFilterSort };
                });
            } else if (type == 'add') {
                this.setState((prev) => {
                    return { modalAdd: !prev.modalAdd };
                });
            }
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems: 'stretch' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>List Project</Text>
                </View>
                <View style={{ flex: 12, backgroundColor: 'white', alignItems: 'center', }}>
                    <ScrollView
                        onScroll={(e) => {
                            var currentOffset = e.nativeEvent.contentOffset.y;
                            var direction = currentOffset > this.offset ? 'down' : 'up';
                            this.offset = currentOffset;
                        }}

                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refresh}
                                onRefresh={() => {
                                    // Basic Implement Refresh Tool
                                    this.setState({ refresh: true });
                                    setInterval(() => {
                                        this.setState({ refresh: false });
                                    }, 3000);
                                }}
                            />
                        }
                    >
                        {[1, 2, 3, 4].map(() => {
                            return (
                                <View style={{
                                    height: 200,
                                    width: 300,
                                    margin: 10,
                                    padding: 10,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderRadius: 2, //shadow section to bottom
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    marginTop: 10,
                                }}>
                                    <View style={{ flex: 1, marginBottom: 10 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Project Pengenalan Kepada Masyarakat</Text>
                                        <Text style={{ opacity: 0.6 }}> 5 menit ago</Text>
                                    </View>
                                    <View style={{ flex: 4 }}>
                                        <Text style={{ opacity: 0.8 }}>Bagian Deskripsi Project, hanya Deskripsi Project</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={{ flex: 1 }}> 12 Discussion</Text>
                                        <Text style={{ flex: 1 }}> 8 Task</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}>
                    <TouchableHighlight
                        onPress={() => {
                            toggleModal('filterSort');
                        }}
                        underlayColor="#ecf0f1"
                        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text>Filter & Sort</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            toggleModal('add');
                        }}
                        underlayColor="#ecf0f1"
                        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text>Add</Text>
                    </TouchableHighlight>
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalFilterSort}
                        onRequestClose={() => {
                            toggleModal('filterSort');
                        }}>
                        <View style={{ flex: 1, marginTop: 22 }}>
                            <FormFilterSort />
                        </View>
                    </Modal>
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalAdd}
                        onRequestClose={() => {
                            toggleModal('add');
                        }}>
                        <View style={{ flex: 1, marginTop: 22 }}>
                            <NewProjectForm />
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}
