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
    TouchableOpacity,
    Button,
    DatePickerAndroid
} from 'react-native';
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
                />
            </View>
        </View>
    );
}
class NewProjectForm extends React.Component {
    constructor(props) {
        super(props);
    }

    async openUpPicker() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });

            if (action == DatePickerAndroid.dateSetAction) {
                console.warn(year + ' ' + month + ' ' + day);
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
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Create Project</Text>
                </View>
                <View style={{
                    flex: 12,
                    alignItems: 'center',
                    paddingTop: 10
                }}>
                    <Input marginTop={15} label='Title' placeholder='Project Name' />
                    <Input marginTop={15} label='Start Date' placeholder='Start Date' />
                    <Input marginTop={0} label='End Date' placeholder='End Date' />
                    <Text>Description  Project</Text>
                    <Button
                        onPress={() => {this.openUpPicker()}}
                        title="Save"
                    />
                </View>
            </View>
        )
    }
}

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalFilter: false,
            modalSort: false,
            modalAdd: false
        }
    }
    render() {
        const toggleModal = (type) => {
            if (type == 'filter') {
                this.setState((prev) => {
                    return { modalFilter: !prev.modalFilter };
                });
            } else if (type == 'sort') {
                this.setState((prev) => {
                    return { modalSort: !prev.modalSort };
                });
            } else if (type == 'add') {
                this.setState((prev) => {
                    return { modalAdd: !prev.modalAdd };
                });
            }
        }
        const submitProject = () => {
            console.warn('submit bro');
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems: 'stretch', }}>
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
                            toggleModal('filter');
                        }}
                        underlayColor="#ecf0f1"
                        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text>Filter</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            toggleModal('sort');
                        }}
                        underlayColor="#ecf0f1"
                        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text>Short</Text>
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
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalFilter}
                        onRequestClose={() => {
                            toggleModal('filter');
                        }}>
                        <View style={{ flex: 1, marginTop: 22 }}>
                            <View>
                                <Text>Modal Filter</Text>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalSort}
                        onRequestClose={() => {
                            toggleModal('sort');
                        }}>
                        <View style={{ flex: 1, marginTop: 22 }}>
                            <View>
                                <Text>Modal Sort</Text>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
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
