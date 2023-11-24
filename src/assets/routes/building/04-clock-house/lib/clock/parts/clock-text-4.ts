import clock_text_4_bin from './clock-text-4.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
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
			"name": "clock, text, 4",
			"rotation": [
				0,
				-0.8660253882408142,
				0,
				0.4999999701976776
			],
			"translation": [
				0.7189579010009766,
				0.022804588079452515,
				0.4150906205177307
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "Material.004",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "Text.006",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 52,
			"max": [
				0.02937743067741394,
				0.0010000000474974513,
				0.10894941538572311
			],
			"min": [
				-0.027431905269622803,
				-0.0010000000474974513,
				-0.16342411935329437
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 52,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 52,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 120,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 550,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 552,
			"uri": clock_text_4_bin
		}
	]
}