import v_bin from './v.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "v",
			"rotation": [
				0.7071068286895752,
				0,
				0,
				0.7071068286895752
			]
		}
	],
	"meshes": [
		{
			"name": "Text.005",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"indices": 3
				}
			]
		}
	],
	"accessors": [
		{
			"bufferView": 0,
			"componentType": 5126,
			"count": 305,
			"max": [
				0.41059842705726624,
				0,
				0.28423935174942017
			],
			"min": [
				0.14637592434883118,
				0,
				-0.1342182755470276
			],
			"type": "VEC3"
		},
		{
			"bufferView": 1,
			"componentType": 5126,
			"count": 305,
			"type": "VEC3"
		},
		{
			"bufferView": 2,
			"componentType": 5126,
			"count": 305,
			"type": "VEC2"
		},
		{
			"bufferView": 3,
			"componentType": 5123,
			"count": 909,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3660,
			"byteOffset": 0,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 3660,
			"byteOffset": 3660,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 2440,
			"byteOffset": 7320,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 1818,
			"byteOffset": 9760,
			"target": 34963
		}
	],
	"buffers": [
		{
			"byteLength": 11580,
			"uri": v_bin
		}
	]
}