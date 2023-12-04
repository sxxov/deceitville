import l_x1_bin from './l-x1.bin?url';

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
			"name": "l",
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
			"name": "Text.002",
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
			"count": 154,
			"max": [
				0.568499743938446,
				0,
				0.2505267560482025
			],
			"min": [
				0.44249892234802246,
				0,
				-0.32258743047714233
			],
			"type": "VEC3"
		},
		{
			"bufferView": 1,
			"componentType": 5126,
			"count": 154,
			"type": "VEC3"
		},
		{
			"bufferView": 2,
			"componentType": 5126,
			"count": 154,
			"type": "VEC2"
		},
		{
			"bufferView": 3,
			"componentType": 5123,
			"count": 456,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1848,
			"byteOffset": 0,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 1848,
			"byteOffset": 1848,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 1232,
			"byteOffset": 3696,
			"target": 34962
		},
		{
			"buffer": 0,
			"byteLength": 912,
			"byteOffset": 4928,
			"target": 34963
		}
	],
	"buffers": [
		{
			"byteLength": 5840,
			"uri": l_x1_bin
		}
	]
}