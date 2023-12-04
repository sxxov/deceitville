import d_bin from './d.bin?url';

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
			"name": "D",
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
			"name": "Text.012",
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
			"count": 342,
			"max": [
				-0.5911292433738708,
				0,
				0.2930889129638672
			],
			"min": [
				-0.8233247399330139,
				0,
				-0.3301727771759033
			],
			"type": "VEC3"
		},
		{
			"bufferView": 1,
			"componentType": 5126,
			"count": 342,
			"type": "VEC3"
		},
		{
			"bufferView": 2,
			"componentType": 5126,
			"count": 342,
			"type": "VEC2"
		},
		{
			"bufferView": 3,
			"componentType": 5123,
			"count": 1026,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4104,
			"byteOffset": 0,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 4104,
			"byteOffset": 4104,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 2736,
			"byteOffset": 8208,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 2052,
			"byteOffset": 10944,
			"target": 34963
		}
	],
	"buffers": [
		{
			"byteLength": 12996,
			"uri": d_bin
		}
	]
}